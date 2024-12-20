import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://vzrruoztwufdcalwudgd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ6cnJ1b3p0d3VmZGNhbHd1ZGdkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM5Mjc4MDMsImV4cCI6MjA0OTUwMzgwM30.UjkC-IfgNJ4mJaamrVYg56AwAHquP3dgNN-645xe9lg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
