import { Injectable, OnInit } from 'angular2/core';

import { Content } from './content';
import { CONTENT } from './mock-content';

@Injectable()

export class HashtagService {
    
    content = [];
    
    constructor() {}
    
    ngOnInit() {
        
    }
    
    getContent() {
        return Promise.resolve(CONTENT);
    }
}