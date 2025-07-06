import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface Props {
    text: string;
    size?: 'sm' | 'default' | 'lg';
    onClick?: () => void;
    className?: string;
    icon?: React.ReactNode;
    href?: string;
}

export const DefaultButton = (props: Props) => {
    return (
        <Button variant="outline" size={props.size ?? 'lg'} className={"bg-white/10 border-white/20 text-white hover:bg-white/20 " + (props.className || '')} onClick={props.onClick}>
            {props.href ? (
                <Link href={props.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    {props.icon && <span className="mr-2">{props.icon}</span>}
                    {props.text}
                </Link>
            ) : (
                <>
                    {props.icon}
                    {props.text}
                </>
            )}
        </Button>
    )
}