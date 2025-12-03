# EmailJS Integration for Contact Page

## Completed Tasks
- [x] Install @emailjs/browser package
- [x] Import EmailJS in Contact.tsx
- [x] Add isSubmitting state for loading feedback
- [x] Update handleSubmit to send emails to admin and user
- [x] Configure EmailJS with provided credentials:
  - Public Key: qSCMjFfQS37HsYO6o
  - Service ID: service_3cr6kb5
  - Admin Template ID: template_c280url
  - User Template ID: template_upwuy55
- [x] Update submit button to show loading state
- [x] Reset form after successful submission
- [x] Add error handling for email sending failures

## Features Implemented
- Admin receives form data via email
- User receives confirmation email automatically
- Form validation and loading states
- Error handling with user feedback
- Form reset after successful submission

## Testing
- Test the contact form submission to ensure emails are sent correctly
- Verify admin receives the form data
- Verify user receives confirmation email
