import { Mensaje } from './mensaje';
import { SubArea } from './sub-area';

export interface ResponseSubArea {
  subAreas: SubArea[];
  estadoTransaccion: boolean;
  mensaje?: Mensaje;
}
