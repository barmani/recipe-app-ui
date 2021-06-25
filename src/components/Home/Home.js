import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import env from 'react-dotenv';

const Home = props => {
  console.log(env.API_URL);

  function submitRecipe(values) {
    console.log(values);
    
  }

  return (
    <Formik
     initialValues={{ recipeName: '', ingredients: '', instructions: '' }}
     isValid
     validationSchema={Yup.object({
       recipeName: Yup.string()
         .max(100, 'Must be 100 characters or less')
         .required('Required'),
       ingredients: Yup.string()
         .required('Required')
     })}
     onSubmit={(values, { setSubmitting }) => {
       setTimeout(() => {
         submitRecipe(values);
         setSubmitting(false);
       }, 400);
     }}
    >
    {({ isValid, dirty }) => (
     <Form>
       <label htmlFor="recipeName">Recipe Name</label>
       <Field name="recipeName" type="text" className="form-textarea" />
       <ErrorMessage name="recipeName" />

       <label htmlFor="ingredients">Ingredients</label>
       <Field name="ingredients" as="textarea" />
       <ErrorMessage name="ingredients" />

       <label htmlFor="instructions">Instructions</label>
       <Field name="instructions" as="textarea" className="form-textarea" />
       <ErrorMessage name="instructions" />

       <button type="submit" disabled={!isValid || !dirty}>Submit</button>
     </Form>
   )}
   </Formik>
 );
};

export default Home;
