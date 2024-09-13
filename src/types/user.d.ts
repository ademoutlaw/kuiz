interface User {
	id?: string;
	firstname: string;
	lastname: string;
	mobile: string;
	email: string;
	password?: string;
	institution: string;
	email_verified_at?: string | null;
	level_id?: string | null;
	branch_id?: string | null;
	optional_subject_id?: string | null;
	role?: string;
	birthday?: string;
	birthplace?: string;
}
interface RegisterForm {
	id?: string;
	firstname: string;
	lastname: string;
	mobile: string;
	email: string;
	password?: string;
	rePassword?: string;
	institution: string;
	level: string;
	optionalSubject: string;
	branch: string;
	role?: string;
	birthday?: string;
	birthplace?: string;
}
