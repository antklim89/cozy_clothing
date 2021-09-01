import yup from 'yup';


export const baseProductFrontmatterSchema = yup.object({
    title: yup.string().required(),
    category: yup.string().required(),
    hidden: yup.boolean().required(),
    careatedAt: yup.string().required(),
    discount: yup.number().required(),
    type: yup.string().required(),
    price: yup.number().required(),
});

export const productPreviewSchema = yup.object({
    id: yup.string().required(),
    frontmatter: yup.object({
        imagePreview: yup.mixed().required(),
    }).concat(baseProductFrontmatterSchema),
});

export const productPreviewArraySchema = yup.array(productPreviewSchema);

export const productSchema = yup.object({
    id: yup.string().required(),
    rawMarkdownBody: yup.string().required(),
    frontmatter: yup.object({
        images: yup.mixed().required(),
    }).concat(baseProductFrontmatterSchema),
});
