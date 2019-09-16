import sql from 'mssql';
import { config } from '../../config'

const dbConfig =   {
    user: config[process.env.NODE_ENV].user,
    password: config[process.env.NODE_ENV].password,
    server: config[process.env.NODE_ENV].server,
    database: config[process.env.NODE_ENV].database
}


export default  {
  
    query:  async (queryString) => {
        const poolRequest = createPool();
        console.info('performing query: ' + queryString);
        let result;
        try {
            result = await poolRequest.request()
            .query(queryString);
            sql.close();
        } catch (err) {
            sql.close();
            throw err;
        }
        return result;
    },
    
    createPool:  async () => {
    
        const pool = await sql.connect(dbConfig);
        pool.on('error', (err) => {
          logger.error('Could not connect to database pool', err);
        });
        return pool;
    },
    
    closeConnection: () => {
        console.info('releasing DB..');
        this.pool.releaseConnection();
    }
    
}
