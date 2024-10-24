import FormButton from './button';
import FormInput from './input';
import FormTextArea from './text-area';

function ContactForm() {
  return (
    <form className='flex flex-col gap-5' onSubmit={e => e.preventDefault()}>
      <div>
        <FormInput
          placeholder='Nombres y apellidos'
          className='w-full'
          id='name'
        />
      </div>
      <div>
        <FormInput
          placeholder='Correo electrónico'
          className='w-full'
          id='mail'
        />
      </div>
      <div>
        <FormInput placeholder='Asunto' className='w-full' id='subject' />
      </div>
      <div>
        <FormTextArea placeholder='Mensaje' className='w-full' id='message' />
      </div>
      <FormButton>Enviar</FormButton>
    </form>
  );
}
export default ContactForm;
