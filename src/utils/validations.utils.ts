export class ValidationUtils {
    // Validação de email usando regex
    static isValidEmail(email: string): boolean {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  
    /*
    static isValidPhone(phone: string): boolean {
      const phoneValidation = (phone.length < 11 || phone.length < 10)
      return phoneValidation;
    }*/
  
    // Validação de senha (mínimo 8 caracteres)
    static isValidPassword(password: string): boolean {
      return password.length >= 8;
    }
  }