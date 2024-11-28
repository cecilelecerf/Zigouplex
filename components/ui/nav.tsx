'use client';

import { Flex, NavLink, useMantineTheme } from "@mantine/core"
import { usePathname } from "next/navigation";

export const Nav = () => {

    const params = usePathname();
    const page = params.split("/")[1]
    const theme = useMantineTheme()
    return (
        <Flex justify="space-between">
            <NavLink href="/" label="Z" active={page === ""} variant="subtle" color="orange"
                styles={{ label: { fontSize: "40px", fontWeight: "bold", } }}
            />
            <Flex gap="md">
                <NavA label="Shop" page={page} path="catalog" />
                <NavA label="Blog" page={page} path="lala" />

            </Flex>
        </Flex>
    )
}

const NavA = ({ label, page, path }: { label: string, page: string, path: string }) => {
    const theme = useMantineTheme()
    return (
        <NavLink label={label} href={`/${path}`} active={page === path} variant="subtle" color="orange" fw="bold" styles={{ label: { fontSize: theme.fontSizes.xl } }} />
    )
}