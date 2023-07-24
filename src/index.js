import  express  from "express";//importa express
import { dirname, join } from 'path';//importa la capacidad de guarda la la ruta absoluta.
import {fileURLToPath} from 'url' //importa la capacidad de 
//Import de modulos de archivos
import indexRoutes from './routes/index.js'


const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));//busca las rutas absolutas dinamcica


app.set('views', join(__dirname, 'views'));//concatena la ruta con la carpeta usando el metodo join
app.set('view engine', 'ejs');
app.use(indexRoutes);
app.use(express.static(join(__dirname,'public')));


app.listen(3000);
console.log(`server is listening on port 3000`);