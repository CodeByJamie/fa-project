type aboutProps = {
	title: string;
	icon: JSX.Element;
	desc: string;
};

type errorProps = {
	error: string;
};

type cardProps = {
	component: string & ("register" | "login");
}

export type { 
	aboutProps, 
	errorProps,
	cardProps,
 };
