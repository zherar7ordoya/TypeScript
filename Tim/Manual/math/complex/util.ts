// File: math/complex/util.ts

import { introduce as simpleIntroduce } from '../simple/util';

export function introduce(){
    return `This is a complex utility function. Also, ${simpleIntroduce()}`;
}