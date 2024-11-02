import FormButton from './button';
import FormInput from './input';
import FormTextArea from './text-area';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { actions } from 'astro:actions';
import { toast } from 'sonner';
import { messageSquema, type Message } from '@/core/message-squema';

const ErrorText = ({ children }: { children: React.ReactNode }) => (
  <span className='text-sm text-red-500 absolute -bottom-5 left-1 font-questrial'>
    {children}
  </span>
);

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { isLoading, errors },
  } = useForm<Message>({
    resolver: zodResolver(messageSquema),
  });

  const onSubmit: SubmitHandler<Message> = async data => {
    const toastId = toast.loading('Enviando mensaje...');

    const res = await actions.sendMessage(data);

    if (res.error) {
      return toast.error('Ha ocurrido un error', { id: toastId });
    }

    toast.success('Mensaje enviado', { id: toastId });
  };

  return (
    <form className='flex flex-col gap-5' onSubmit={handleSubmit(onSubmit)}>
      <div className='relative'>
        <FormInput
          placeholder='Nombres y apellidos'
          className='w-full'
          {...register('name')}
        />
        {errors.name && <ErrorText>{errors.name.message}</ErrorText>}
      </div>
      <div className='relative'>
        <FormInput
          placeholder='Correo electrónico'
          className='w-full'
          {...register('email')}
        />
        {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
      </div>
      <div className='relative'>
        <FormInput
          placeholder='Asunto'
          className='w-full'
          {...register('subject')}
        />
        {errors.subject && <ErrorText>{errors.subject.message}</ErrorText>}
      </div>
      <div className='relative'>
        <FormTextArea
          placeholder='Mensaje'
          className='w-full'
          id='message'
          {...register('message')}
        />
        {errors.message && <ErrorText>{errors.message.message}</ErrorText>}
      </div>
      <FormButton disabled={isLoading}>Enviar</FormButton>
    </form>
  );
}

export default ContactForm;
