-- Create role enum for user authorization
CREATE TYPE public.app_role AS ENUM ('admin', 'user', 'viewer');

-- Create user_roles table to manage user permissions
CREATE TABLE public.user_roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    role app_role NOT NULL DEFAULT 'user',
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    UNIQUE(user_id, role)
);

-- Enable RLS on user_roles table
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Create security definer function to check user roles (prevents RLS recursion)
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- Create function to check if user is admin
CREATE OR REPLACE FUNCTION public.is_admin(_user_id UUID)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT public.has_role(_user_id, 'admin')
$$;

-- Drop existing RLS policies on Customer Contacts
DROP POLICY IF EXISTS "Allow public contact form submissions" ON public."Customer Contacts";
DROP POLICY IF EXISTS "Only authenticated users can delete contacts" ON public."Customer Contacts";
DROP POLICY IF EXISTS "Only authenticated users can update contacts" ON public."Customer Contacts";
DROP POLICY IF EXISTS "Only authenticated users can view contacts" ON public."Customer Contacts";

-- Create new secure RLS policies for Customer Contacts
-- Allow public to submit contact forms (INSERT only)
CREATE POLICY "Allow public contact form submissions" 
ON public."Customer Contacts" 
FOR INSERT 
WITH CHECK (true);

-- Only admin users can view customer contacts
CREATE POLICY "Only admin users can view contacts" 
ON public."Customer Contacts" 
FOR SELECT 
USING (public.is_admin(auth.uid()));

-- Only admin users can update customer contacts
CREATE POLICY "Only admin users can update contacts" 
ON public."Customer Contacts" 
FOR UPDATE 
USING (public.is_admin(auth.uid()));

-- Only admin users can delete customer contacts
CREATE POLICY "Only admin users can delete contacts" 
ON public."Customer Contacts" 
FOR DELETE 
USING (public.is_admin(auth.uid()));

-- Create RLS policies for user_roles table
-- Users can view their own roles
CREATE POLICY "Users can view their own roles" 
ON public.user_roles 
FOR SELECT 
USING (auth.uid() = user_id);

-- Only admins can manage user roles
CREATE POLICY "Only admins can insert user roles" 
ON public.user_roles 
FOR INSERT 
WITH CHECK (public.is_admin(auth.uid()));

CREATE POLICY "Only admins can update user roles" 
ON public.user_roles 
FOR UPDATE 
USING (public.is_admin(auth.uid()));

CREATE POLICY "Only admins can delete user roles" 
ON public.user_roles 
FOR DELETE 
USING (public.is_admin(auth.uid()));

-- Insert a default admin user (you'll need to replace this UUID with your actual user ID)
-- This is commented out - you'll need to manually add admin users after authentication is set up
-- INSERT INTO public.user_roles (user_id, role) VALUES ('your-user-id-here', 'admin');