import { AiOutlineCompass } from 'react-icons/ai';
import { BsCameraReels, BsEmojiLaughing, BsFilm } from 'react-icons/bs';
import { GiPistolGun } from 'react-icons/gi';
import { MdOutlineCatchingPokemon } from 'react-icons/md';

export const SidebarData = [
    {
        icon: <BsFilm />,
        content: 'Trending',
        redirect: '/',
    },
    {
        icon: <GiPistolGun />,
        content: 'Action',
        redirect: '/action',
    },
    {
        icon: <AiOutlineCompass />,
        content: 'Adventure',
        redirect: '/adventure',
    },
    {
        icon: <MdOutlineCatchingPokemon />,
        content: 'Animation',
        redirect: '/animation',
    },
    {
        icon: <BsEmojiLaughing />,
        content: 'Comedy',
        redirect: '/comedy',
    },
    {
        icon: <BsCameraReels />,
        content: 'Documentary',
        redirect: '/documentary',
    },
]