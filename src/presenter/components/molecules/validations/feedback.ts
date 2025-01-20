import * as Yup from 'yup';

export const feedbackSchema = Yup.object({
  title: Yup.string()
    .required('Feedback Title is required')
    .min(10, 'Title must be at least 10 characters long')
    .max(100, 'Title cannot exceed 100 characters'),

  category: Yup.string()
    .required('Category is required')
    .oneOf(
      ['Feature', 'UI', 'UX', 'Enhancement', 'Bug'],
      'Invalid category selected'
    ),

  details: Yup.string()
    .required('Feedback Details is required')
    .min(10, 'Details must be at least 50 characters long')
    .max(2000, 'Details cannot exceed 1000 characters'),

  status: Yup.string()
    .required('Status is required')
    .oneOf(
      ['Suggestion', 'Planned', 'In-Progress', 'Live'],
      'Invalid status selected'
    ),
});

export type FeedbackFormData = Yup.InferType<typeof feedbackSchema>;
