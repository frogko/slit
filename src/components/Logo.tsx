import React from 'react'
import LogoIcon from '@/components/icons/LogoIcon'

interface Props extends HTMLDivElement {}

const Logo = (props: Props) => {
    return <LogoIcon {...props} />
}

export default Logo
