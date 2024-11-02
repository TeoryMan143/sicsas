import {
  Body,
  Head,
  Heading,
  Html,
  Tailwind,
  Text,
} from '@react-email/components';

export default function MessageEmail({
  email,
  message,
  name,
}: {
  name: string;
  email: string;
  message: string;
}) {
  return (
    <Tailwind>
      <Html className='font-sans'>
        <Head>
          <Heading
            as='h1'
            className='text-center bg-[#0466c8] py-5 rounded-sm text-white'
          >
            Mensaje de contacto
          </Heading>
        </Head>
        <Body>
          <Text>
            <b>Nombre: </b> {name}
          </Text>
          <Text>
            <b>Correo: </b> {email}
          </Text>
          <Text>{message}</Text>
        </Body>
      </Html>
    </Tailwind>
  );
}
