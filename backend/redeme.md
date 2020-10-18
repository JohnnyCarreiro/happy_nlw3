## Request params 

Query params: http://localhost:3333/users?search=joao It uses params names for diferents tips of requests
Route params: http://localhost:3333/users/212989 It uses identifiers, example a user id, it's used for methods put and delete. 
In tha source code app.put('/users/:id', (request, response)=>{
    request.status(200).json({message:"User has been deleted"})
})
And the last is body, where we have all information, usualy came from form inputs submitions


## Database Queries
Native Driver: SELECT * WHERE user ....(e.g.: Native SLQ or Database queries language)
QUery builder: using javascript language to build queries: knex('users').where('name', '=', 'João'). (e.g.: Knex)
ORM (Object Relational Mapping) It uses classes, what make easyer work with any SQL languages


into migrations:

columns:[
    {
        name:'id',
        type:'integer',
        unsigned: true, // not negative
        isPrimary: true,
        isGenarated: true,
        genarationsStrategy: 'increment',
    }
]









