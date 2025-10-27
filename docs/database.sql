DROP TABLE IF EXISTS public.training_sessions;
DROP TYPE IF EXISTS public.session_type;

CREATE TYPE session_type AS ENUM ('legs', 'back', 'chest');

CREATE TABLE training_sessions (
    id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    session_type session_type NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL
);

-- Insert some sample data into the table
insert into training_sessions (session_type)
values
  ('legs');

alter table training_sessions enable row level security;

create policy "public can read training_sessions"
on public.training_sessions
for select to anon
using (true);

create policy "public can insert training_sessions"
on public.training_sessions
for insert to anon
with check (true);