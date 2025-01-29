import { useEffect, useState } from "react"
import Image from "next/image"
import useSiteTheme from "hooks/useSiteTheme"

const DiscordCTA = () => {
    const [discordData, setDiscordData] = useState<{name : string, presence_count : number, members : [any], instant_invite: string} | null>(null)
    const theme = useSiteTheme();

    useEffect(() => {
        fetch('https://discord.com/api/guilds/1261798653962489866/widget.json')
            .then(res => res.json())
            .then(data => setDiscordData(data))
            .catch(err => {
                console.error("Failed to get Discord data", err)
            })
    }, [])

    return <>
        <h1 className="text-xl font-semibold pb-2 mt-4">Join our Discord to stay up to date!</h1>
        <div className="bg-gb-light-bg2 dark:bg-[#1e1f22] rounded-md p-4 mt-2 w-min pr-6 border-[1px] border-gb-light-bg3 dark:border-gb-bg2">
            <div className="flex flex-row items-center gap-x-3">
                <Image src={theme == "dark" ? "/logo-white.svg" : "/logo-color.svg"} alt="Gamebeast Icon" width={50} height={50} className="rounded-md" />
                <div className="flex flex-col">
                    <p className="font-semibold text-lg text-gb-text-dark dark:text-slate-200 ">{discordData?.name || "Gamebeast"}</p>
                    <p className="text-sm text-[#8d8d8d] text-nowrap">{discordData?.presence_count || "∞"} Members Online</p>
                </div>
                <a className="flex flex-row bg-[#5865f2] font-semibold text-white rounded-md px-4 ml-5 py-2 items-center gap-3 w-[9.5rem]" href={discordData?.instant_invite || "https://discord.gg/gamebeast"}>
                    <Image src={ "/external/discord.svg"} alt="Discord Icon" width={30} height={30} className="rounded-md" />
                    <p className="text-white">Join</p>
                </a>
            </div>
        </div>
    </>
}

export default DiscordCTA