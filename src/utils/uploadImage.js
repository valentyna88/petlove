import toast from 'react-hot-toast';

export const uploadImage = async (
  file,
  baseUrl,
  cloudName,
  uploadPreset,
  options = { toast: true }
) => {
  const fd = new FormData();
  fd.append('file', file);
  fd.append('upload_preset', uploadPreset);

  try {
    const response = await fetch(`${baseUrl}/${cloudName}/upload`, {
      method: 'POST',
      body: fd,
    });
    const data = await response.json();

    if (data.secure_url) {
      if (options.toast) toast.success('Photo uploaded successfully!');
      return data.secure_url;
    } else {
      if (options.toast) toast.error('Photo upload failed!');
      throw new Error('No secure_url from Cloudinary');
    }
  } catch (err) {
    if (options.toast) toast.error('Photo upload failed!');
    throw err;
  }
};
