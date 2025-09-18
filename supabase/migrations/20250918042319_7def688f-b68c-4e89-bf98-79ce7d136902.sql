-- Create RLS policies for Customer Contacts table to protect sensitive data

-- Allow anyone to insert contact information (for the public contact form)
CREATE POLICY "Allow public contact form submissions" 
ON public."Customer Contacts" 
FOR INSERT 
TO anon
WITH CHECK (true);

-- Only authenticated users can view contact information
CREATE POLICY "Only authenticated users can view contacts" 
ON public."Customer Contacts" 
FOR SELECT 
TO authenticated
USING (true);

-- Only authenticated users can update contact information
CREATE POLICY "Only authenticated users can update contacts" 
ON public."Customer Contacts" 
FOR UPDATE 
TO authenticated
USING (true);

-- Only authenticated users can delete contact information
CREATE POLICY "Only authenticated users can delete contacts" 
ON public."Customer Contacts" 
FOR DELETE 
TO authenticated
USING (true);