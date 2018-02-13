/**
 * Test the URL given by the user
 */

/**
 *
 * @param {string} url
 * @return {object}
 */
export const tryURL = (url) => {
  try {
    if (!url.includes('.')) {
      throw new Error('No full stop');
    }
    return {
      text: new URL(url),
      valid: true,
    };
  } catch (error) {
    return {
      text: testError(url, error.message),
      valid: false,
    };
  }
};

const testError = (url, message) => {
  if (message.includes('is not a valid URL')) {
    if (!url.trim()) {
      return 'Invalid link: Try typing something...';
    }
    if (!url.startsWith('https://') || url.startsWith('http://')) {
      return 'Invalid link: Try adding https:// or http:// at the front.';
    }
  }
  if (message.includes('No full stop')) {
    return 'Invalid link: Have you added a domain like ".com" or ".co.uk"';
  }
  return 'Invalid link: Sorry, try another link.';
};
