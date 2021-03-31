import {useState} from 'react'


export const useForm = () => {
    const [formData,setFormData] = useState({
        title: '',
        body: ''
    })
    const handleFormInput = (e) => {
      let formData = {};
      formData[e.target.name] = e.target.value;
      setFormData(prevState => {
          return {
              ...prevState,
              ...formData
          }
      })
    }
    return {formData,handleFormInput}
}