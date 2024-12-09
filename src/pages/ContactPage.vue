<template>
  <div class="contact-section">
    <h1>Get in Touch</h1>
    <p class="contact-description">
        Have a question or would like to collaborate? I'd love to hear from you.
    </p>
    
    <div class="contact-container">
      <p class="form-info">
        Please fill out the form below and I'll get back to you as soon as possible.
      </p>
      <form @submit.prevent="sendEmail" class="contact-form">
        <div class="form-group">
          <label>Name</label>
          <input type="text" v-model="formData.name" required />
        </div>
        
        <div class="form-group">
          <label>Email</label>
          <input type="email" v-model="formData.email" required />
        </div>

        <div class="form-group">
          <label>Subject</label>
          <input type="text" v-model="formData.subject" required />
        </div>
        
        <div class="form-group">
          <label>Message</label>
          <textarea v-model="formData.message" required></textarea>
        </div>

        <button type="submit" :disabled="loading">
          {{ loading ? 'Sending...' : 'Send Message' }}
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import emailjs from '@emailjs/browser'
import { message } from 'ant-design-vue'

const loading = ref(false)
const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const sendEmail = async () => {
  loading.value = true
  try {
    await emailjs.send(
      'service_tt3i6a8',
      'template_fv5h2p8',
      {
        from_name: formData.value.name,
        from_email: formData.value.email,
        subject: formData.value.subject,
        message: formData.value.message
      },
      'Osgo-eVqhWNZyqA6N'
    )
    message.success('Your message has been sent successfully! I will get back to you as soon as possible.')
    formData.value = { name: '', email: '', subject: '', message: '' }
  } catch (error) {
    message.error('An error occurred. Please try again.')
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.contact-section {
  max-width: 1200px;
  margin: 3rem auto;
  padding: 0 1rem;
}

h1 {
  color: rgba(202, 83, 83, 0.9);
  text-align: center;
  margin-bottom: 1rem;
}

.contact-description {
  color: #ffffff;
  text-align: center;
  max-width: 700px;
  margin: 0 auto 2rem;
  line-height: 1.6;
  opacity: 0.8;
}

.contact-container {
  max-width: 800px;
  width: 90%;
  margin: 0 auto 3rem;
  padding: 3rem;
  background-color: #1a1a1a;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.form-info {
  color: #ffffff;
  text-align: center;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  line-height: 1.6;
  opacity: 0.9;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

label {
  color: #ffffff;
  font-size: 0.9rem;
}

input, textarea {
  padding: 0.8rem;
  border: 1px solid #333;
  border-radius: 4px;
  background-color: #2a2a2a;
  color: #ffffff;
}

textarea {
  min-height: 150px;
  resize: vertical;
}

button {
  padding: 1rem 2rem;
  background-color: rgba(202, 83, 83, 0.9);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s;
}

button:hover {
  background-color: rgba(202, 83, 83, 1);
}

button:disabled {
  background-color: #666;
  cursor: not-allowed;
}

@media (max-width: 768px) {
  .contact-section {
    margin: 2rem auto;
  }
  
  .contact-container {
    width: 95%;
    padding: 1.5rem;
  }
  
  .contact-description {
    margin-bottom: 2rem;
  }
  
  button {
    width: 100%;
  }
}
</style>