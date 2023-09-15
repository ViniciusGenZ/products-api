export interface IBase {
	status_active: boolean;
	created_by: number;
	updated_by: number;
	deleted_by: number | null;
	created_at: Date;
	updated_at: Date;
	deleted_at: Date | null;
}
