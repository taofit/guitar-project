import {number, string} from "prop-types";

type Image = {
    "type": string;
    "file": string;
    "width": string;
    "height": string;
    "exists": boolean;
}

type Price = {
    "primary": {
        "raw": string,
        "formatted": string,
    },
    "secondary": {
        "formatted": boolean
    },
    "currencyCode": string
}

type text = {
    "title": string,
    "subheadline": string,
    "cleanText": string,
    "features": string[],
    "featuresClean": string[]
}

type ManufacturerData = {
    "name": string,
    "articleCount": number,
    "image": {
        "file": string,
        "width": string,
        "height": string,
        "exists": boolean,
    }
}

export type Manufacturer = {
    name: string;
    count: string;
    isSelected: boolean;
    isManufacturer: boolean;
}

export type Article = {
    id: number;
    name: string;
    manufacturer: string;
    availability: object;
    rank: object;
    price: Price;
    isReorderable: boolean;
    rating: object;
    text: text;
    manufacturerData: ManufacturerData;
    image: Image;
}
