import React from 'react';
import { useLottie } from 'lottie-react';
import { Label } from './ui/label';
import { Input } from './ui/input';
import MagicButton from './MagicButton';
import { FaLocationArrow } from 'react-icons/fa6';
import AnimationContact from '@/data/AnimationContact.json';
import AnimationDone from '@/data/AnimationDone.json';
import { useForm, ValidationError } from '@formspree/react';
import Lottie from 'lottie-react';

const SignupForm: React.FC = () => {
  const [state, handleSubmit] = useForm('mjvqdple');

  return (
    <form onSubmit={handleSubmit} className='w-full flex flex-col md:flex-row items-center justify-center gap-10'>
      <div className='w-full md:w-2/4 items-center justify-center'>
        <div className='flex flex-col gap-5'>
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="eng.alzahraa.meky@gmail.com" type="email" name="email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className='flex flex-col gap-5 mt-5'>
          <Label htmlFor="message">Your Message</Label>
          <Input id="message" placeholder="Type your message here." type="text" className='min-h-[80px]' name="message" />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>
        <div className='flex w-full justify-center items-center mt-5'>
          <MagicButton
            type="submit"
            disabled={state.submitting}
            title={state.submitting ? "Submitting ..." : "Let's get in touch"}
            icon={<FaLocationArrow />}
            position="right"
          />
        </div>
        {state.succeeded && (
          <div className='flex w-full justify-center items-center mt-5'>
            <Lottie animationData={AnimationDone} className='h-8' loop={false}/>
            <p>Your message has been sent successfully</p>
          </div>
        )}
      </div>
      <div className="hidden md:block md:w-1/4 items-center justify-center lg:-mt-5 md:-mt-[4.25rem] ">
        <Lottie animationData={AnimationContact}/>
      </div>
    </form>
  );
}

export default SignupForm;
