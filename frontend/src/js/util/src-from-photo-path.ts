export const srcFromPhotoPath = (photoPath: string): string => {
    return process.env.SERVER_ORIGIN.concat(`/${photoPath}`);
};