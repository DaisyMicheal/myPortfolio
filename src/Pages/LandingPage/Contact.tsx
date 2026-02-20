import Button from '../../Components/ui/button'
import Input from '../../Components/ui/input'

export default function Contact() {
  return (
    <section className="mx-auto mt-16 w-full max-w-3xl px-4 pb-16 sm:px-6">
      <h2 className="text-2xl font-bold tracking-tight text-black sm:text-2xl">Get in touch</h2>

      <p className="mt-4 max-w-lg text-base leading-relaxed text-black/55 sm:text-lg">
        I&apos;m always interested in exploring new opportunities, collaborating, or
        exchanging ideas with like-minded individuals. Feel free to book a call or email
        me if you&apos;d like to discuss a potential project.
      </p>

      <form className="mt-8 space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <Input as="input" type="text" placeholder="Full Name" variant="outline" fieldSize="md" />
          <Input as="input" type="email" placeholder="Email Address" variant="outline" fieldSize="md" />
        </div>

        <Input
          as="textarea"
          rows={7}
          placeholder="Write your Message"
          variant="outline"
          fieldSize="md"
        />

        <div className="pt-1">
          <Button
            variant="primary"
            size="lg"
            animation="none"
            fullWidth
            className="contact-send-btn h-14 rounded-2xl border-0 text-sm hover:scale-[1.02]"
          >
            Send Message
          </Button>
        </div>
      </form>
    </section>
  )
}
