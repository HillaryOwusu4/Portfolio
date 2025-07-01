export default {
    name:'testimonials',
    title:'Testimonials',
    type: 'document',
    fields:[
        { 
            name:'name',
            title:'Name',
            type: 'string'
        },
        { 
            name:'Email',
            title:'email',
            type: 'string'
        },
         { 
            name:'Position',
            title:'position',
            type: 'string'
        },
        { 
            name:'Linkedin',
            title:'Linkedin',
            type: 'url'
        },
        {
            name:'company',
            title:'Company',
            type:'string'
        },
        {
            name:'imgurl',
            title:'ImgUrl',
            type: 'image',
            options: {
              hotspot: true,
            },
        },  
        {
            name:'feedback',
            title:'Feedback',
            type:'string'
        }
    ]
}