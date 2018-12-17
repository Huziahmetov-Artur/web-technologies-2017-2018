import { constants } from '../constants/constants'
import mongoose from 'mongoose'

mongoose.Promise = global.Promise;
mongoose.connect(constants.db).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

export default mongoose