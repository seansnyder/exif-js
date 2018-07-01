interface IResult {
    exifdata: any;
    iptcdata: any;
    exifdata?: any;
}

interface EXIFStatic {
    getData(img: Blob|File, callback: (result: IResult) => any): any;
    getTag(img: any, tag: any): any;
    getAllTags(img: any): any;
    pretty(img: any): string;
    readFromBinaryFile(file: ArrayBuffer): any;
    enableXmp(): void;
    disableXmp(): void;
}

declare var EXIF : EXIFStatic;
export = EXIF;
