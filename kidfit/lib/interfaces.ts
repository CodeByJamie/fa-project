export interface aboutProps {
	title: string;
	icon: JSX.Element;
	desc: string;
}

export interface errorProps {
	error: string;
}

export interface formProps {
	button: JSX.Element;
	updatedData: (data: { email: string; password: string }) => void;
}
