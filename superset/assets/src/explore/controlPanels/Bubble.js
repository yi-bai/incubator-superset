import { t } from '@superset-ui/translation';

export default {
  label: t('Bubble Chart'),
  controlPanelSections: [
    {
      label: t('GROUP BY'),
      description: t('Use this section if you want a query that aggregates'),
      expanded: true,
      controlSetRows: [
        ['series', 'entity'],
        ['x'],
        ['y'],
        ['size'],
      ],
    },
    {
      label: t('NOT GROUPED BY'),
      description: t('Use this section if you want to query atomic rows'),
      expanded: true,
      controlSetRows: [
        ['bubble_use_not_grouped_by'],
        ['labels'],
        ['x_column', 'y_column'],
        ['size_column'],
      ],
    },
    {
      label: t('Query'),
      expanded: true,
      controlSetRows: [
        ['adhoc_filters'],
        ['max_bubble_size'],
        ['limit', null],
      ],
    },
    {
      label: t('Chart Options'),
      expanded: true,
      controlSetRows: [
        ['color_scheme'],
        ['show_legend', null],
      ],
    },
    {
      label: t('X Axis'),
      expanded: true,
      controlSetRows: [
        ['x_axis_label', 'left_margin'],
        ['x_axis_format', 'x_ticks_layout'],
        ['x_log_scale', 'x_axis_showminmax'],
      ],
    },
    {
      label: t('Y Axis'),
      expanded: true,
      controlSetRows: [
        ['y_axis_label', 'bottom_margin'],
        ['y_axis_format', null],
        ['y_log_scale', 'y_axis_showminmax'],
      ],
    },
  ],
  controlOverrides: {
    x_axis_format: {
      default: '.3s',
    },
    color_scheme: {
      renderTrigger: false,
    },
    size: {
      validators: [],
    },
    x: {
      validators: [],
    },
    y: {
      validators: [],
    },
    entity: {
      validators: [],
    },
  },
};
