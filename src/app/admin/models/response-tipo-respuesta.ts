import { Mensaje } from './mensaje';
import { TipoDocumento } from './tipodocumento';

export interface ResponseTipoDocumento {
  tiposDocumentos: TipoDocumento[] ;
  estadoTransaccion: boolean;
  mensaje?: Mensaje;
}
