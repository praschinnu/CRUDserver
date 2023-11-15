const jsonserver=require('json-server')
const cors=require('cors')

const server=jsonserver.create()

const middleware=jsonserver.defaults()

const router=jsonserver.router('crud.json')

server.use(middleware)
server.use(cors())
server.use(router)

const PORT=5000
server.listen(PORT,()=>{
    console.log(`__json server start at ${PORT}__`);
})