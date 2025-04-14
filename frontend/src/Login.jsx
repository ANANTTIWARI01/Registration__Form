import  { useState } from 'react'

function Login() {
    const [formData,setFormData] = useState({
        email:"",
        password:""
    })

function handleChange(e){
    const {name ,value} = e.target
    setFormData({...formData,[name]:value})
}

function handleSubmit(event){
    event.preventDefault();

    if (!formData.email || !formData.password) {
      return console.log("error");
      ; 
    }

    console.log('Form submitted:', formData);
    alert('User information successfully submitted!');
}
    return(
        <>
        <div>
            <form onSubmit={handleSubmit}>
                {/* Email Field */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

            {/* Password Field */}
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div>
            <button type='submit'>Submit</button>
        </div>

            </form>
        </div>
        </>
    )
}

export default Login