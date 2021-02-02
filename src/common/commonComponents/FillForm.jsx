/* eslint-disable react/jsx-no-duplicate-props */
import { Field, reduxForm } from "redux-form"

let PostFormComponent = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name='title' component={'textarea'} validate = {[]} placeholder={'title'} validate={[]} />
        </div>
        <div>
            <Field name='body' component={'textarea'} placeholder={'body'} validate={[]} />
        </div>
    <button>
        Submit
    </button>
    </form>
}
PostFormComponent = reduxForm({ form: 'newPostForm' })(PostFormComponent)

export default PostFormComponent