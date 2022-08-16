import express from 'express'

const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))

const users = [
    {
        name: 'Its Me',
        email: 'hapakule@quiz-app.com',
        password: '09876543'
    },
    {
        name: 'Not Me',
        email: 'neverhere@quiz-app.com',
        password: '12345678'
    }
]

//landing page
app.get('/', (req, res) => {
    res.render('index')
})

//display login page
app.get('/login', (req, res) => {
    res.render('login')
})

// display signup page
app.get('/signup', (req, res) => {
    const user = {
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    }
    
    res.render('signup', {error: false, user:user})
})

//process signup form
app.post('/signup', (req, res) =>{
    const user = {
        name: req.body.fullname,
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword
    }

    if (user.password === user.confirmPassword) {
        
    } else {
        
        let message = 'Password/confirm password mismatch'

        res.render('signup', {error: true, message: message, user:user})
    }


})


const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log(`app is running on PORT ${PORT}`)
})