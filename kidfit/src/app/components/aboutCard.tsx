interface paramProps {
    title: string,
    desc: string,
}

export default function aboutCard({title, desc}: paramProps) {
    return (
        <div className="flex flex-col bg-zinc-50 max-w-fit p-8 rounded-2xl border-zinc-400 border-2">
            <span className="font-poppins font-bold text-3xl">{title}</span>
            <span className="max-w-screen-sm">{desc}</span>
        </div>
    )
}