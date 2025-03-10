import PageHeader from '@/components/common/PageHeader'
import SectionTitle from '@/components/common/SectionTitle'
import ContactForm from '@/components/sections/contact/ContactForm'
import ContactInfo from '@/components/sections/contact/ContactInfo'
import ContactMap from '@/components/sections/contact/ContactMap'
import SectionContainer from '@/components/shared/SectionContainer'
import React from 'react'

function ContactPage() {
  return (
    <>
        <PageHeader 
            title='Liên hệ'
            breadcrumbs={[
                { label: 'Trang chủ', href: '/' },
                { label: 'Liên hệ', href: '/lien-he', active: true }
            ]}
        />
        <SectionContainer>
            <SectionTitle title='Liên hệ với chúng tôi' 
                description='Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.'
                className='text-center'/>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12">
                <div className="lg:col-span-5">
                    <ContactInfo />
                </div>
                <div className="lg:col-span-7">
                    <ContactForm />
                </div>
            </div>
        </SectionContainer>
        <div className="mt-20">
            <ContactMap />
        </div>
    </>
  )
}

export default ContactPage