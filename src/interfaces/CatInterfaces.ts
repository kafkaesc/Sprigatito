import { StaticImageData } from 'next/image';

export interface Cat {
	age?: number;
	id: number;
	name?: string;
	nickname?: string;
}

export interface CatImageDetails {
	alt: string;
	height?: number;
	catImageId: number;
	name: string;
	src: StaticImageData;
	width?: number;
}
