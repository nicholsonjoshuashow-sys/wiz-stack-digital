REVOKE EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.is_admin(uuid) FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.update_updated_at_column() FROM PUBLIC, anon, authenticated;

DROP POLICY IF EXISTS "Allow public contact form submissions" ON public."Customer Contacts";

CREATE POLICY "Allow public contact form submissions"
ON public."Customer Contacts"
FOR INSERT
TO anon, authenticated
WITH CHECK (
  first_name IS NOT NULL AND length(btrim(first_name)) BETWEEN 1 AND 100
  AND last_name IS NOT NULL AND length(btrim(last_name)) BETWEEN 1 AND 100
  AND email_address IS NOT NULL
  AND length(email_address) BETWEEN 3 AND 254
  AND email_address ~* '^[^@[:space:]]+@[^@[:space:]]+\.[^@[:space:]]+$'
  AND (details IS NULL OR length(details) <= 5000)
  AND (company_name IS NULL OR length(company_name) <= 200)
  AND (position IS NULL OR length(position) <= 200)
  AND (interested_service IS NULL OR length(interested_service) <= 200)
);