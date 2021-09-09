import { chunk0 } from './omnidef_chunk0.js';
import { chunk1 } from './omnidef_chunk1.js';
import { chunk2 } from './omnidef_chunk2.js';


                let def = '';
                def += chunk0;
def += chunk1;
def += chunk2;


                def = decodeURIComponent(atob(def));    
                export const OMNIDEF = JSON.parse(def);