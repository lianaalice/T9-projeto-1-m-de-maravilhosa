if (self.CavalryLogger) { CavalryLogger.start_js(["EiiMl"]); }

__d("SocialGoodCharityActionsTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";a=function(){function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:SocialGoodCharityActionsLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:SocialGoodCharityActionsLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:SocialGoodCharityActionsLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setAbTestNamesToGroups=function(a){this.$1.ab_test_names_to_groups=b("GeneratedLoggerUtils").serializeMap(a);return this};c.setAttributes=function(a){this.$1.attributes=b("GeneratedLoggerUtils").serializeMap(a);return this};c.setCampaignID=function(a){this.$1.campaign_id=a;return this};c.setCampaignType=function(a){this.$1.campaign_type=a;return this};c.setEvent=function(a){this.$1.event=a;return this};c.setExplicitPostID=function(a){this.$1.explicit_post_id=a;return this};c.setFundraiserID=function(a){this.$1.fundraiser_id=a;return this};c.setHasPaymentMethodOnFile=function(a){this.$1.has_payment_method_on_file=a;return this};c.setParentEventType=function(a){this.$1.parent_event_type=a;return this};c.setSessionID=function(a){this.$1.session_id=a;return this};c.setSourceAttributes=function(a){this.$1.source_attributes=b("GeneratedLoggerUtils").serializeMap(a);return this};c.setTime=function(a){this.$1.time=a;return this};c.setVC=function(a){this.$1.vc=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};c.updateExtraData=function(a){a=b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));b("GeneratedLoggerUtils").checkExtraDataFieldNames(a,g);this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.addToExtraData=function(a,b){var c={};c[a]=b;return this.updateExtraData(c)};return a}();var g={ab_test_names_to_groups:!0,attributes:!0,campaign_id:!0,campaign_type:!0,event:!0,explicit_post_id:!0,fundraiser_id:!0,has_payment_method_on_file:!0,parent_event_type:!0,session_id:!0,source_attributes:!0,time:!0,vc:!0,weight:!0};e.exports=a}),null);
__d("SocialGoodCharityActionsLoggerEvents",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ACCEPT_FUNDRAISER_ORGANIZER_REQUEST:"accepted_fundraiser_organizer_request",ACCEPT_ORGANIZER_REQUEST_COMPLETE:"accept_organizer_request_complete",ADD_PENDING_ORGANIZER_COMPLETE:"add_pending_organizer_complete",AUTO_DELETE_FUNDRAISER_DRAFT:"auto_delete_fundraiser_draft",BIRTHDAY_FUNDRAISER_LEARN_MORE_VIEW:"birthday_fundraiser_learn_more_view",BLACKLIST_DAF_CHARITY:"blacklist_daf_charity",BLACKLIST_DAF_CHARITY_FAILED:"blacklist_daf_charity_failed",BULK_INVITE_USER_DIALOG_OPEN:"bulk_invite_user_dialog_open",CANCEL:"cancel",CATEGORY_DESCRIPTION_TOOLTIP_HOVER:"category_description_tooltip_hover",CAUSE_ITEM_CLICK:"cause_item_click",CHANGE_BENEFICIARY:"change_beneficiary",CHANGE_CATEGORY:"change_category",CHANGE_CHARITY:"change_charity",CHANGE_CHARITY_LOCATION:"change_charity_location",CHANGE_COVER_PHOTO:"change_cover_photo",CHANGE_COVER_PHOTO_BEGIN:"change_cover_photo_begin",CHANGE_COVER_VIDEO:"change_cover_video",CHANGE_CURRENCY:"change_currency",CHANGE_DESCRIPTION:"change_description",CHANGE_END_DATE:"change_end_date",CHANGE_GOAL_AMOUNT:"change_goal_amount",CHANGE_MASTER_NOTIF_SETTING:"change_master_notif_setting",CHANGE_TITLE:"change_title",CHANGED_CAUSE:"changed_cause",CHARITY_CREATION:"charity_creation",CHARITY_CREATION_COMPLETE:"charity_creation_complete",CHARITY_SRT_FLOW:"charity_srt_flow",CHARITY_SRT_JOB_APPROVED:"charity_srt_job_approved",CHARITY_SRT_JOB_CREATION:"charity_srt_job_creation",CHARITY_SRT_JOB_DECISION:"charity_srt_job_decision",CHARITY_SRT_JOB_INFO_FETCH:"charity_srt_job_info_fetch",CHARITY_SRT_THREAD_CREATION:"charity_srt_thread_creation",CHARITY_SRT_UNDO_COMPLIANCE_REVIEW:"charity_srt_undo_compliance_review",CHARITY_TRANSACTION_REPORTS:"charity_transaction_reports",CHARITY_VERIFICATION_DOCUMENT_UPLOAD:"charity_verification_document_upload",CHARITY_VERIFICATION_DOCUMENT_UPLOAD_COMPLETE:"charity_verification_document_upload_complete",CHARITY_VERIFICATION_SUSPEND:"charity_verification_suspend",CHOOSE_CREATE_P4C_INSTEAD:"choose_create_p4c_instead",CHOOSE_CREATE_P4P_ANYWAYS:"choose_create_p4p_anyways",CHOOSE_OTHER_CATEGORY:"choose_other_category",CLICK_BIRTHDAY_PRESENT_UPSELL_DONATION_IN_HONOR_OF:"click_birthday_present_upsell_donation_in_honor_of",CLICK_DONATE_MONTHLY:"click_donate_monthly",CLICK_DONATE_ONCE:"click_donate_once",CLICK_DONATION_HISTORY_ITEM:"click_donation_history_item",CLICK_LIKE_BUTTON:"click_like_button",CLICK_OPEN_EDIT_GROUP_FUNDRAISER_SETTINGS:"click_open_edit_group_fundraiser_settings",CLICK_OTHER_AMOUNT_BUTTON:"click_other_amount_button",CLICK_SUGGESTED_AMOUNT_BUTTON:"click_suggested_amount_button",CLICK_UNLIKE_BUTTON:"click_unlike_button",CLOSE_POST_UPSELL:"close_post_upsell",COMPLETE_DONATE:"complete_donate",COMPOSE_CLICK:"compose_click",CONFIRM:"confirm",CONFIRM_FUNDRAISER_MATCH_BEGIN:"confirm_fundraiser_match_begin",CONFIRM_FUNDRAISER_MATCH_CANNOT_AUTOCHARGE:"confirm_fundraiser_match_cannot_autocharge",CONFIRM_FUNDRAISER_MATCH_COMPLETE:"confirm_fundraiser_match_complete",CONFIRM_FUNDRAISER_MATCH_PAID:"confirm_fundraiser_match_paid",CONFIRM_FUNDRAISER_MATCH_VIEW_INTERSTITIAL:"confirm_fundraiser_match_view_interstitial",CONFIRM_FUNDRAISER_MATCH_ZERO_AMOUNT:"confirm_fundraiser_match_zero_amount",CONFIRM_INFO_DIALOG:"confirm_info_dialog",COPY_LINK_CLICK:"copy_link_click",COPY_NONPROFIT_FUNDRAISER_CREATION_SHORT_URL:"copy_nonprofit_fundraiser_creation_short_url",CORPORATE_SEEDING_GIFT_CREATE_ELIGIBLE:"corporate_seeding_gift_create_eligible",CORPORATE_SEEDING_GIFT_CREATE_START:"corporate_seeding_gift_create_start",CORPORATE_SEEDING_GIFT_CREATE_SUCCESS:"corporate_seeding_gift_create_success",CORPORATE_SEEDING_GIFT_INTERSTITIAL_ACCEPT:"corporate_seeding_gift_interstitial_accept",CORPORATE_SEEDING_GIFT_INTERSTITIAL_CANCEL:"corporate_seeding_gift_interstitial_cancel",CORPORATE_SEEDING_GIFT_INTERSTITIAL_LEARN_MORE:"corporate_seeding_gift_interstitial_learn_more",CORPORATE_SEEDING_GIFT_INTERSTITIAL_VIEW:"corporate_seeding_gift_interstitial_view",COVER_PHOTO_ATTACH:"cover_photo_attach",COVER_VIDEO_ATTACH:"cover_video_attach",COVER_VIDEO_METADATA_PARSED:"cover_video_metadata_parsed",COVER_VIDEO_REMOVED:"cover_video_removed",COVER_VIDEO_UPLOAD_FAILED:"cover_video_upload_failed",COVER_VIDEO_UPLOAD_STARTED:"cover_video_upload_started",COVER_VIDEO_UPLOADED:"cover_video_uploaded",CREATE_COMMENT:"create_comment",CREATE_DONATION_BUDGET_GOAL_COMPLETE_NOTIF:"create_donation_budget_goal_complete_notif",CREATE_DONATION_IN_HONOR_OF:"create_donation_in_honor_of",CREATE_FLOW_CHANGE_ACTOR:"create_flow_change_actor",CREATE_FLOW_CHANGE_P4P_COUNTRY:"fundraiser_change_p4p_country",CREATE_FLOW_CHANGE_P4P_CURRENCY:"fundraiser_change_p4p_currency",CREATE_FLOW_MATCH_CHANGE_AMOUNT:"create_flow_match_change_amount",CREATE_FLOW_MATCH_TOGGLE_INPUT:"create_flow_match_toggle_input",CREATE_FLOW_MULTISTEP_BASIC_INFO:"create_flow_multistep_basic_info",CREATE_FLOW_MULTISTEP_MEDIA:"create_flow_multistep_media",CREATE_FLOW_MULTISTEP_STORY:"create_flow_multistep_story",CREATE_FLOW_TAPPED_P4P_CHANGE_COUNTRY:"fundraiser_tapped_p4p_change_country",CREATE_FLOW_TAPPED_P4P_CHANGE_CURRENCY:"fundraiser_tapped_p4p_change_currency",CREATE_FUNDRAISER_BEGIN:"create_fundraiser_begin",CREATE_FUNDRAISER_CLICK:"create_fundraiser_click",CREATE_FUNDRAISER_DRAFT:"create_fundraiser_draft",CREATE_FUNDRAISER_MATCH_BEGIN:"create_fundraiser_match_begin",CREATE_FUNDRAISER_MATCH_COMPLETE:"create_fundraiser_match_complete",CREATE_FUNDRAISER_MATCH_VIEW_INTERSTITIAL:"create_fundraiser_match_view_interstitial",CREATE_FUNDRAISER_MATCHING_POOL_COMPLETE:"create_fundraiser_matching_pool_complete",CREATE_FUNDRAISER_MATCHING_RULE:"create_fundraiser_matching_rule",CREATE_FUNDRAISER_OPEN:"create_fundraiser_open",CREATE_FUNDRAISER_PROFILE_FRAME_BEGIN:"create_fundraiser_profile_frame_begin",CREATE_FUNDRAISER_PROFILE_FRAME_COMPLETE:"create_fundraiser_profile_frame_complete",CREATE_FUNDRAISER_PUBLISHED:"create_fundraiser_published",CREATE_FUNDRAISER_SCHEDULED_MATCH_COMPLETE:"create_fundraiser_scheduled_match_complete",CREATE_FUNDRAISER_UNPUBLISHED:"create_fundraiser_unpublished",CREATE_POST:"create_post",DECLINE_ORGANIZER_REQUEST_COMPLETE:"decline_organizer_request_complete",DEFAULT_COVER_VIDEO_SELECTED:"default_cover_video_selected",DELETE_BEGIN:"delete_begin",DELETE_COMMENT:"delete_comment",DELETE_COMPLETE:"delete_complete",DELETE_DONATION:"delete_donation",DELETE_FUNDRAISER_DRAFT:"delete_fundraiser_draft",DELETE_POST:"delete_post",DIALOG_BEFORE_UNLOAD:"dialog_before_unload",DIALOG_CANCEL:"dialog_cancel",DIALOG_CONFIRM:"dialog_confirm",DIALOG_UNLOAD:"dialog_unload",DIALOG_VALIDATION_ERROR:"dialog_validation_error",DISABLE_FUNDRAISER_FOR_STORY_BEGIN:"disable_fundraiser_for_story_begin",DISABLE_FUNDRAISER_FOR_STORY_COMPLETE:"disable_fundraiser_for_story_complete",DISCARD_FUNDRAISER_DRAFT:"discard_fundraiser_draft",DONATE_CLICK:"donate_click",DONATE_SOCIAL_PLUGIN_IMPRESSION:"donate_social_plugin_impression",DONATE_SOCIAL_PLUGIN_LOGGED_IN_CLICK:"donate_social_plugin_logged_in_click",DONATE_SOCIAL_PLUGIN_LOGGED_OUT_CLICK:"donate_social_plugin_logged_out_click",DONATE_TO_ENDED_CAMPAIGN_INTERSTITIAL_CANCEL:"donate_to_ended_campaign_interstitial_cancel",DONATE_TO_ENDED_CAMPAIGN_INTERSTITIAL_DONATE:"donate_to_ended_campaign_interstitial_donate",DONATE_TO_ENDED_CAMPAIGN_INTERSTITIAL_OTHER:"donate_to_ended_campaign_interstitial_other",DONATE_TO_ENDED_CAMPAIGN_INTERSTITIAL_VIEW:"donate_to_ended_campaign_interstitial_view",DONATION_IMPACT_DISMISS_PROMPT:"donation_impact_dismiss_prompt",DONATION_MATCH_COMPLETE:"donation_match_complete",DONATION_MATCH_SEEDED:"donation_match_seeded",DONATION_THANK_YOU_COMMENT_COMPLETE:"donation_thank_you_comment_complete",DONATION_THANK_YOU_COMMENT_DIALOG_OPEN:"donation_thank_you_comment_dialog_open",DOWNLOAD_DAILY_CHARITY_TRANSACTION_REPORTS:"download_daily_charity_transaction_reports",EDIT_FUNDRAISER_BEGIN:"edit_fundraiser_begin",EDIT_FUNDRAISER_CLICK:"edit_fundraiser_click",EDIT_FUNDRAISER_COMPLETE:"edit_fundraiser_complete",EDIT_FUNDRAISER_MATCH_BEGIN:"edit_fundraiser_match_begin",EDIT_FUNDRAISER_MATCH_COMPLETE:"edit_fundraiser_match_complete",EDIT_GROUP_FUNDRAISER_SETTINGS_BEGIN:"edit_group_fundraiser_settings_begin",EDIT_GROUP_FUNDRAISER_SETTINGS_CANCEL:"edit_group_fundraiser_settings_cancel",EDIT_GROUP_FUNDRAISER_SETTINGS_COMPLETE:"edit_group_fundraiser_settings_complete",EDIT_GROUP_FUNDRAISER_SETTINGS_CONFIRM:"edit_group_fundraiser_settings_confirm",EDIT_P4P_BENEFICIARY:"edit_p4p_beneficiary",END_FUNDRAISER_BEGIN:"end_fundraiser_begin",END_FUNDRAISER_COMPLETE:"end_fundraiser_complete",ENTITY_CREATION:"entity_creation",EXTERNAL_APP_DONATION:"external_app_donation",EXTERNAL_APP_DONATION_DELETION:"external_app_donation_deletion",FAILED_TO_FETCH_DONATE_URL_DONATION_IN_HONOR_OF:"failed_to_fetch_donate_url_donation_in_honor_of",FAILED_TO_FETCH_DONATE_URL_PERMANENT_FUNDRAISER_DONATION:"failed_to_fetch_donate_url_permanent_fundraiser_donation",FAILED_TO_FETCH_NONPROFIT_BOTTOM_SHEET:"failed_to_fetch_nonprofit_bottom_sheet",FAQ_SHARE_ARTICLE:"faq_share_article",FAQ_VIEW_ANSWER:"faq_view_answer",FBMF_BIRTHDAY_GIFT_DONATION_CREATE:"fbmf_birthday_gift_donation_create",FBMF_BIRTHDAY_GIFT_DONATION_DELETE:"fbmf_birthday_gift_donation_delete",FEED_PAYLOAD_CHANGE_DESCRIPTION:"feed_payload_change_description",FEED_PAYLOAD_CHANGE_GOAL:"feed_payload_change_goal",FETCH_DONATION_BUDGET:"fetch_donation_budget",FILTER_PAGE_FUNDRAISERS_TAB:"filter_page_fundraisers_tab",FOLLOW_CLICK:"follow_click",FOLLOW_COMPLETE:"follow_complete",FRP_GRANULAR_REJECT_MODEL_DECISION:"frp_granular_reject_model_decision",FRP_GRANULAR_REJECT_MODEL_DIALOG_EDIT:"frp_granular_reject_model_dialog_edit",FRP_GRANULAR_REJECT_MODEL_DIALOG_NONPROFIT_PIVOT:"frp_granular_reject_model_dialog_nonprofit_pivot",FRP_GRANULAR_REJECT_MODEL_LOADING:"frp_granular_reject_model_loading",FRP_GRANULAR_REJECT_MODEL_RESPONSE_ACCEPTED:"frp_granular_reject_model_response_accepted",FRP_GRANULAR_REJECT_MODEL_RESPONSE_ERROR:"frp_granular_reject_model_response_error",FRP_GRANULAR_REJECT_MODEL_RESPONSE_INVALID:"frp_granular_reject_model_response_invalid",FRP_GRANULAR_REJECT_MODEL_RESPONSE_REJECTED:"frp_granular_reject_model_response_rejected",FUNDRAISER_ACTIVATION:"fundraiser_activation",FUNDRAISER_ADD_ORGANIZERS:"fundraiser_add_organizers",FUNDRAISER_APPROVED_BY_SRT:"fundraiser_approved_by_srt",FUNDRAISER_AUTONOTIFY_COMPLETE:"fundraiser_autonotify_complete",FUNDRAISER_BIRTHDAY_CENTER_PROMPT_VIEW:"fundraiser_birthday_center_prompt_view",FUNDRAISER_CHAT_SUPPORT_CLICK:"fundraiser_chat_support_click",FUNDRAISER_CHECKLIST_EXPAND_ITEM:"expand_creator_checklist_item",FUNDRAISER_CHECKLIST_TAP_CTA:"tap_creator_checklist_item_cta",FUNDRAISER_CREATE_OPT_OUT_PREFILL_DESCRIPTION:"fundraiser_create_opt_out_prefill_description",FUNDRAISER_CREATE_OPT_OUT_PREFILL_TITLE:"fundraiser_create_opt_out_prefill_title",FUNDRAISER_CREATE_POST_CLICK:"fundraiser_create_post_click",FUNDRAISER_CRISIS_FOR_CHARITY_DONATION_ASYNC_UPDATE:"fundraiser_crisis_for_charity_donation_async_update",FUNDRAISER_CRISIS_FOR_CHARITY_DONATION_ASYNC_UPDATE_SUCCESS:"fundraiser_crisis_for_charity_donation_async_update_success",FUNDRAISER_DONATION_ASYNC_UPDATE:"fundraiser_donation_async_update",FUNDRAISER_DONATION_ASYNC_UPDATE_SUCCESS:"fundraiser_donation_async_update_success",FUNDRAISER_DONATION_FLOW_EMAIL_OPT_IN_CHECKED:"fundraiser_donation_flow_email_opt_in_checked",FUNDRAISER_DONATION_FLOW_EMAIL_OPT_OUT_CHECKED:"fundraiser_donation_flow_email_opt_out_checked",FUNDRAISER_EDIT_ORGANIZERS:"fundraiser_edit_organizers",FUNDRAISER_FOR_CAUSE_ANALYSIS_RULE_MATCHED:"fundraiser_for_cause_analysis_rule_matched",FUNDRAISER_FOR_STORY_DONATION_ASYNC_UPDATE:"fundraiser_for_story_donation_async_update",FUNDRAISER_FOR_STORY_DONATION_ASYNC_UPDATE_SUCCESS:"fundraiser_for_story_donation_async_update_success",FUNDRAISER_FOR_STORY_REPLACE_PLACEHOLDER_ATTACHMENT:"fundraiser_for_story_replace_placeholder_attachment",FUNDRAISER_FOR_STORY_SET_GOAL_AMOUNT:"fundraiser_for_story_set_goal_amount",FUNDRAISER_FOR_STORY_TIP_ACTION_CLICK:"fundraiser_for_story_tip_action_click",FUNDRAISER_FOR_STORY_TIP_DISMISS:"fundraiser_for_story_tip_dismiss",FUNDRAISER_FOR_STORY_VIEW_MORE_INFO:"fundraiser_for_story_view_more_info",FUNDRAISER_FOR_STORY_VIEW_NONPROFIT_SUGGESTION:"fundraiser_for_story_view_nonprofit_suggestion",FUNDRAISER_GOAL_HIT:"fundraiser_goal_hit",FUNDRAISER_HUB_CATEGORY_CLICK:"fundraiser_hub_category_click",FUNDRAISER_HUB_CHARITY_SEARCH_LOAD_MORE:"fundraiser_hub_charity_search_load_more",FUNDRAISER_HUB_CHARITY_SEARCH_LOAD_MORE_RESPONSE_EMPTY:"fundraiser_hub_charity_search_load_more_response_empty",FUNDRAISER_HUB_CHARITY_SEARCH_QUERY:"fundraiser_hub_charity_search_query",FUNDRAISER_HUB_CHARITY_SEARCH_RESPONSE_EMPTY:"fundraiser_hub_charity_search_response_empty",FUNDRAISER_HUB_CHARITY_SEARCH_RESULTS:"fundraiser_hub_charity_search_results",FUNDRAISER_LIVE_RECORDING:"fundraiser_live_broadcast_recording",FUNDRAISER_LIVE_STARTING:"fundraiser_live_broadcast_starting",FUNDRAISER_MATCH_DELETE_BEGIN:"fundraiser_match_delete_begin",FUNDRAISER_MATCH_DELETE_COMPLETE:"fundraiser_match_delete_complete",FUNDRAISER_MATCH_HARD_DELETE_CALLED:"fundraiser_match_hard_delete_called",FUNDRAISER_MATCH_MET:"fundraiser_match_met",FUNDRAISER_MATCH_REVIEW_VIEW_INTERSTITIAL:"fundraiser_match_review_view_interstitial",FUNDRAISER_MORE_BUTTON_CLICK:"fundraiser_more_button_click",FUNDRAISER_PAGE_BIRTHDAY_REMIND_FAQ:"fundraiser_page_birthday_remind_faq",FUNDRAISER_PAGE_CREATE_BIRTHDAY_REMINDER:"fundraiser_page_create_birthday_reminder",FUNDRAISER_PAGE_PERSONAL_REVIEW_INFO_LEARN_MORE_CLICK:"fundraiser_page_personal_review_info_learn_more_click",FUNDRAISER_PAGE_SHARE_IMPRESSION:"fundraiser_page_share_impression",FUNDRAISER_PAUSED_BY_SRT:"fundraiser_paused_by_srt",FUNDRAISER_PAYOUT_SETUP_CLICK:"fundraiser_payout_setup_click",FUNDRAISER_PAYOUT_VERIFICATION_CLICK:"fundraiser_payout_verification_click",FUNDRAISER_PROMPT_RENDER:"fundraiser_prompt_render",FUNDRAISER_REJECTED_BY_SRT:"fundraiser_rejected_by_srt",FUNDRAISER_RHC_TIP_X_OUT:"fundraiser_rhc_tip_x_out",FUNDRAISER_SCHEDULED_MATCH_DELETE_BEGIN:"fundraiser_scheduled_match_delete_begin",FUNDRAISER_SCHEDULED_MATCH_DELETE_COMPLETE:"fundraiser_scheduled_match_delete_complete",FUNDRAISER_SEARCH_LOAD_MORE:"fundraiser_search_load_more",FUNDRAISER_SEARCH_LOAD_MORE_RESPONSE_EMPTY:"fundraiser_search_load_more_response_empty",FUNDRAISER_SEARCH_QUERY:"fundraiser_search_query",FUNDRAISER_SEARCH_RESPONSE_EMPTY:"fundraiser_search_response_empty",FUNDRAISER_SEARCH_RESULTS:"fundraiser_search_results",FUNDRAISER_SEE_ALL_CLICK:"fundraiser_see_all_click",FUNDRAISER_SHARE_NONPROFIT_POST:"share_nonprofit_post",FUNDRAISER_SUMMARY_CLICK:"fundraiser_summary_click",FUNDRAISER_TAP_NONPROFIT_POST:"tap_nonprofit_post",FUNDRAISER_UNPAUSED_BY_SRT:"fundraiser_unpaused_by_Srt",GEN_CUSTOMIZED_SINGLE_FIELD_AMOUNT:"gen_customized_single_field_amount",GEN_PRICE_CONFIG:"gen_price_config",GENERATE_SOCIAL_CONTEXT:"generate_social_context",GIVING_TUESDAY_MATCH_COMMUNICATION_SCRIPT_END:"giving_tuesday_match_communication_script_end",GIVING_TUESDAY_MATCH_COMMUNICATION_SCRIPT_START:"giving_tuesday_match_communication_script_start",GIVING_TUESDAY_MATCHING_TALLY:"giving_tuesday_matching_tally",GIVING_TUESDAY_VIEW_DONOR_MATCH_INFO:"giving_tuesday_view_donor_match_info",GOTO_PAGE_ACTIONBAR:"fundraiser_page_tapped_go_to_page",GOTO_PAGE_SUBTITLE:"fundraiser_charity_page_subtitle",GROUP_ADMIN_FUNDRAISER_PROFILE_FOR_CHARITY_LINKED_CARD_STATE_VIEWED:"group_admin_fundraiser_profile_for_charity_linked_card_state_viewed",GROUP_ADMIN_FUNDRAISER_PROFILE_FOR_CHARITY_NOT_LINKED_CARD_STATE_VIEWED:"group_admin_fundraiser_profile_for_charity_not_linked_card_state_viewed",GROUP_FUNDRAISER_CONFIRMATION_PAGE:"group_fundraiser_confirmation_page",GROUP_MEMBER_FUNDRAISER_PROFILE_FOR_CHARITY_LINKED_CARD_STATE_VIEWED:"group_member_fundraiser_profile_for_charity_linked_card_state_viewed",GUIDESTAR_FUNDRAISER_HEADER_DISMISSED:"guidestar_fundraiser_header_dismissed",GUIDESTAR_SCRIPT_ERROR:"guidestar_script_error",HIDE:"hide",HUB_ACTIVITY_LINK_CLICK:"hub_activity_link_click",IDLE_TO_DONATE_BANNER_DISMISSED:"idle_to_donate_banner_dismissed",IDLE_TO_DONATE_BANNER_SHOWN:"idle_to_donate_banner_shown",INCREASE_GOAL_AMOUNT_EQUAL:"increase_goal_amount_equal",INCREASE_GOAL_AMOUNT_INPUT_CHANGE:"increase_goal_amount_input_change",INCREASE_GOAL_AMOUNT_NULL:"increase_goal_amount_null",INCREASE_GOAL_AMOUNT_SCREEN_SHOWN:"increase_goal_amount_screen_shown",INCREASE_GOAL_AMOUNT_SMALLER:"increase_goal_amount_smaller",INITIALIZATION:"initialization",INITIALIZATION_BEGIN:"initialization_begin",INITIALIZATION_DEBUG:"initialization_debug",INITIALIZATION_ERROR:"initialization_error",INITIALIZATION_FROM_LOGGED_OUT_USER:"initialization_from_logged_out_user",INTERACT_WITH_MISSION_CARD:"interact_with_mission_card",INTERESTED_COMPLETE:"interested_complete",INVITE_CLICK:"invite_click",INVITE_COMPLETE:"invite_complete",INVITE_DIALOG_BOOTSTRAP_ENTRIES:"invite_dialog_bootstrap_entries",INVITE_DIALOG_BOOTSTRAP_FILTER_GROUPS:"invite_dialog_bootstrap_filter_groups",INVITE_DIALOG_COLLAPSE_GROUP:"invite_dialog_collaps_group",INVITE_DIALOG_DESELECT_ALL_ENTRIES:"invite_dialog_deselect_all_entries",INVITE_DIALOG_DESELECT_ENTRY:"invite_dialog_deselect_entry",INVITE_DIALOG_EXPAND_GROUP:"invite_dialog_expand_group",INVITE_DIALOG_INITIAL_LOAD:"invite_dialog_inital_load",INVITE_DIALOG_SELECT_ALL_ENTRIES:"invite_dialog_select_all_entries",INVITE_DIALOG_SELECT_ENTRY:"invite_dialog_select_entry",INVITE_DIALOG_SET_ACTIVE_FILTER:"invite_dialog_set_active_filter",INVITE_DIALOG_SET_DONATED_TO_FUNDRAISER_FILTER:"invite_dialog_set_donated_to_fundraiser_filter",INVITE_DIALOG_SET_FRIEND_FILTER:"invite_dialog_set_friend_filter",INVITE_DIALOG_SET_GROUP_FILTER:"invite_dialog_set_group_filter",INVITE_DIALOG_SET_MUTUAL_FRIENDS_FILTER:"invite_dialog_set_mutual_friends_filter",INVITE_DIALOG_SET_POSTED_BIRTHDAY_WISH_FILTER:"invite_dialog_set_posted_birthday_wish_filter",INVITE_DIALOG_UPDATE_MESSAGE:"invite_dialog_update_message",INVITE_DIALOG_UPDATE_QUERY:"invite_dialog_update_query",INVITE_EMAIL_COMPLETE:"invite_email_complete",INVITE_EMAIL_DIALOG_OPEN:"invite_email_dialog_open",INVITE_NULL_MISSION:"invite_null_mission",INVITE_USER_COMPLETE:"invite_user_complete",INVITE_USER_DIALOG_OPEN:"invite_user_dialog_open",INVITE_USER_FRIEND_INVITER_SEND:"invite_user_friend_inviter_send",LEADERSHIP_INFO:"leadership_info",LEARN_MORE_CLICK:"learn_more_click",LIKE_GIVING_FUND:"like_giving_fund",LIVE_VIDEO_ATTACHMENT_VIEW:"fundraiser_live_video_attachment_view",LIVE_VIDEO_START:"fundraiser_live_video_start",LOAD_GROUP_FUNDRAISER_SETTINGS_ROW:"load_group_fundraiser_settings_row",LOAD_NONPROFIT_DETECTED_DIALOG:"load_nonprofit_detected_dialog",LOAD_NONPROFIT_SELECTOR_DONATION_IN_HONOR_OF:"load_nonprofit_selector_donation_in_honor_of",MATCHING_AUTOCHARGE_PAYMENTS_SCRIPT:"matching_autocharge_payments_script",MISSING_GRAPHQL_FIELDS:"fundraiser_page_missing_fields",NONPROFIT_KEYWORD_DETECTED:"nonprofit_keyword_detected",NOTIF_CAPPED_NOT_SENT:"notif_capped_not_sent",NOTIF_CLICK:"notif_click",NOTIF_GENERATE:"notif_generate",NOTIF_IMPRESSION:"notif_impression",NOTIF_MARKASREAD:"notif_markasread",NOTIF_MARKASSEEN:"notif_markasseen",NOTIF_NEGATIVE_FEEDBACK:"notif_negative_feedback",ONBOARDING_PAGE_LOAD:"onboarding_page_load",OPEN_CAUSE_BENEFICIARY_SELECTOR:"open_cause_beneficiary_selector",OPEN_CHARITY_BENEFICIARY_SELECTOR:"open_charity_beneficiary_selector",OPEN_CUSTOM_BENEFICIARY_FLOW:"open_custom_beneficiary_flow",OPEN_FRIEND_BENEFICIARY_SELECTOR:"open_friend_beneficiary_selector",OPEN_FRIEND_BENEFICIARY_SELECTOR_CLICK:"open_friend_beneficiary_selector_click",OPEN_GROUP_SHARE_DIALOG:"open_group_share_dialog",OPEN_NONPROFIT_FUNDRAISER_CREATION_SHORT_URL:"open_nonprofit_fundraiser_creation_short_url",ORGANIZATION_DETAILS:"organization_details",OUTRO_DISMISSED:"fundraiser_outro_dismissed",OUTRO_SHOWN:"fundraiser_outro_shown",P4P_CONNECT_STRIPE:"p4p_connect_stripe",PAGE_DONATION_SETTINGS_LOAD_ERROR:"page_donation_settings_load_error",PAGE_TERM_REVIEW_INITIALIZED:"page_term_review_initialized",PAGE_VERIFICATION_INITIALIZED:"page_verification_initialized",PAYMENT_APPLICATION_INITIALIZED:"payment_application_initialized",PAYMENT_INFO:"payment_info",PERSONAL_CAUSE_ANALYSIS_RULE_MATCHED:"personal_cause_analysis_rule_matched",PERSONAL_CAUSE_KEYWORDS_MATCHED_ON_COMMENT:"personal_cause_keywords_matched_on_comment",PERSONAL_UPDATE_BEGIN:"personal_update_begin",PERSONAL_UPDATE_NULL_MISSION:"personal_update_null_mission",PERSONAL_UPDATE_SEND_COUNT:"personal_update_send_count",PERSONAL_UPDATE_SEND_EMAIL:"personal_update_send_email",PERSONAL_UPDATE_SEND_MESSAGE:"personal_update_send_message",POST_DONATION_BUTTON_TAP:"fundraiser_thank_you_button_tap",POST_DONATION_VIEW:"fundraiser_view_thank_you",POST_STATUS_UPDATE:"post_status_update",PPGF_SCRIPT_ERROR:"ppgf_script_error",PROFILE_PROMPT_CLICK:"profile_prompt_click",PROFILE_PROMPT_DISMISS:"profile_prompt_dismiss",PROFILE_PROMPT_FAILED_TO_RETRIEVE_TOP_FUNDRAISER_AFTER_PASSING_ELIGIBILITY_CHECK:"profile_prompt_failed_to_retrieve_top_fundraiser_after_passing_eligibility_check",PROFILE_PROMPT_IMPRESSION:"profile_prompt_impression",PROFILE_PROMPT_SOFT_DISMISS:"profile_prompt_soft_dismiss",PUBLISH_BIRTHDAY_FUNDRAISER_NOW:"publish_birthday_fundraiser_now",QP_AUCTION_FUNDRAISER_CLICK:"qp_auction_fundraiser_click",QP_AUCTION_FUNDRAISER_IMPRESSION:"qp_auction_fundraiser_impression",QUICK_PROMOTION_DISMISS_CLICK:"quick_promotion_dismiss_click",QUICK_PROMOTION_IMPRESSION:"quick_promotion_impression",QUICK_PROMOTION_PRIMARY_CLICK:"quick_promotion_primary_click",QUICK_PROMOTION_SECONDARY_CLICK:"quick_promotion_secondary_click",REACTION_INVITE_CLICK_DEPRECATED:"reaction_invite_click",RECEIVE_NMOR_DONATION_RESPONSE:"receive_nmor_donation_response",RECURRING_DONATION_ACTIVATE:"recurring_donation_activate",RECURRING_DONATION_CANCEL:"recurring_donation_cancel",RECURRING_DONATION_CREATE:"recurring_donation_create",RECURRING_DONATION_REINITED:"recurring_donation_reinited",RED_NOSE_DAY_MATCHING_TALLY:"red_nose_day_matching_tally",REMOVE_ORGANIZER_COMPLETE:"remove_organizer_complete",REMOVE_PENDING_ORGANIZER_COMPLETE:"remove_pending_organizer_complete",REMOVE_SELF_FROM_INVITE_LIST:"remove_self_from_invite_list",REPORT_FUNDRAISER_CLICK:"report_fundraiser_click",REPOSITION_COVER_PHOTO:"reposition_cover_photo",SAVE_COMPLETE:"save_complete",SAVE_FUNDRAISER_DRAFT:"save_fundraiser_draft",SCHEDULE_MATCH_JOB:"schedule_match_job",SCHEDULE_MATCH_RUNNING_JOB:"schedule_match_running_job",SEARCH_BENEFICIARIES:"fundraiser_creation_search_beneficiaries",SEARCH_CHARITIES:"search_charities",SEARCH_GRAPHQL_RESPONSE_EMPTY:"search_graphql_response_empty",SEARCH_RESPONSE:"search_response",SEARCH_RESPONSE_EMPTY:"search_response_empty",SEE_MORE_CATEGORIES:"see_more_categories",SEE_SELF_DONATIONS:"see_self_donations",SELECT_NONPROFIT_DONATION_IN_HONOR_OF:"select_nonprofit_donation_in_honor_of",SELECT_NONPROFIT_PERMANENT_FUNDRAISER_DONATION:"select_nonprofit_permanent_fundraiser_donation",SEND_NMOR_DONATION_REQUEST:"send_nmor_donation_request",SET_FUNDRAISER_DRAFT:"set_fundraiser_draft",SHARE_CLICK:"share_click",SHARE_CLICK_CANCEL:"share_click_cancel",SHARE_COMPLETE:"share_complete",SHARE_DONATION_COMPLETE:"share_donation_complete",SHARE_EMAIL_WITH_CHARITY:"share_email_with_charity",SHARE_FAIL:"share_fail",SHARE_QR_CODE_CLICK:"share_qr_code_click",SHOW_POST_UPSELL:"show_post_upsell",SINGLE_CLICK_INVITE_FETCH_DATA_FAILURE:"fundraiser_single_click_invite_fetch_data_failure",SINGLE_CLICK_INVITE_SENT:"fundraiser_single_click_invite_sent",SINGLE_CLICK_INVITE_SENT_FAILURE:"fundraiser_single_click_invite_sent_failure",SINGLE_CLICK_INVITE_VIEW:"fundraiser_single_click_invite_view",SOCIAL_CONTEXT_UNIT_SEE_ALL:"social_context_unit_tapped_see_all",STARTER_TEMPLATE_ANSWER_CHANGE:"starter_template_answer_change",STARTER_TEMPLATE_BEGIN_BUTTON_CLICK:"starter_template_begin_button_click",STARTER_TEMPLATE_CANCEL_BUTTON_CLICK:"starter_template_cancel_button_click",STARTER_TEMPLATE_DISPLAY_MODAL:"starter_template_display_modal",STARTER_TEMPLATE_DONE_CLICK:"starter_template_done_click",STARTER_TEMPLATE_FREE_FORM_BUTTON_CLICK:"starter_template_free_form_button_click",STARTER_TEMPLATE_NEXT_CLICK:"starter_template_next_click",STARTER_TEMPLATE_OPT_IN_BUTTON_CLICK:"starter_template_opt_in_button_click",STARTER_TEMPLATE_SKIP_CLICK:"starter_template_skip_click",STICKER_CLICK:"sticker_click",STICKER_CREATE_BEGIN:"sticker_create_begin",STICKER_DONATE_OUTRO_PAGE_VIEW:"sticker_donate_outro_page_view",STICKER_PICKER_RESULT_CLICK:"sticker_picker_result_click",STICKER_POST_ATTEMPT:"sticker_post_attempt",STICKER_POST_SUCCESS:"sticker_post_success",STICKER_TOOLTIP_CLICK:"sticker_tooltip_click",STICKER_VIEW:"sticker_view",STRIPE_CREATION_REQUIRES_INFO:"stripe_creation_requires_info",SUPPORTERS_SCREEN_LOADED:"supporters_screen_loaded",SUPPORTERS_SCREEN_TAPPED_PROFILE:"supporters_screen_tapped_profile",SUPPRESSED_POST_UPSELL:"suppressed_post_upsell",TAP_CREATOR_ITEM:"tap_creator_item",TAP_NONPROFIT_ITEM:"tap_nonprofit_item",TAPPED_COPY_LINK:"fundraiser_tapped_copy_link",TAPPED_NONPROFIT_CELL_FOR_BOTTOM_SHEET:"tapped_nonprofit_cell_for_bottom_sheet",TAPPED_NONPROFIT_LEARN_MORE:"tapped_nonprofit_learn_more",TAPPED_SHARE_AS_MESSAGE:"fundraiser_tapped_share_as_message",TAPPED_SHARE_AS_POST:"fundraiser_tapped_share_as_post",TAPPED_SHARE_SEE_MORE:"fundraiser_tapped_share_see_more",TAPPED_STICKY_CREATE_BUTTON:"fundraiser_tapped_sticky_create_button",TERMS_ACCEPT:"terms_accept",TERMS_ACCEPT_PAGE_LOAD:"terms_accept_page_load",TOGGLE_GROUP_FUNDRAISER_CREATION_PERMISSIONS:"toggle_group_fundraiser_creation_permissions",TOGGLE_GROUP_FUNDRAISER_FEATURE_SETTING:"toggle_group_fundraiser_feature_setting",TOGGLE_NOTIFICATIONS_ON_FUNDRAISER:"toggle_notifications_on_fundraiser",TRANSACTION_API_POST:"transaction_api_post",UNFOLLOW_CLICK:"unfollow_click",UNFOLLOW_COMPLETE:"unfollow_complete",UNINTERESTED_COMPLETE:"uninterested_complete",UNLIKE_GIVING_FUND:"unlike_giving_fund",UNSAVE_COMPLETE:"unsave_complete",UPLOAD_COVER_PHOTO:"upload_cover_photo",UPLOAD_COVER_PHOTO_FAIL:"upload_cover_photo_fail",UPLOAD_COVER_PHOTO_SUCCESS:"upload_cover_photo_success",VIEW_ABOUT_FUNDRAISERS:"view_about_fundraisers",VIEW_BENEFICIARY_SELECTOR:"view_beneficiary_selector",VIEW_BIRTHDAY_CENTER:"view_birthday_center",VIEW_BIRTHDAY_PRESENT_UPSELL:"view_birthday_present_upsell",VIEW_BOOKMARK_FUNDRAISER_PAGINATION:"view_bookmark_fundraiser_pagination",VIEW_BOOKMARK_HUB:"view_bookmark_hub",VIEW_BOOKMARK_HUB_COMPONENT:"view_bookmark_hub_component",VIEW_BOOKMARK_HUB_TAB:"view_bookmark_hub_tab",VIEW_CHARITY_ON_SELECTOR:"view_charity_on_selector",VIEW_CREATE_FORM:"view_create_form",VIEW_CREATE_OUTRO_DIALOG:"view_create_outro_dialog",VIEW_DONATION_BUDGET_DASHBOARD:"view_donation_budget_dashboard",VIEW_DONATION_HISTORY:"view_donation_history",VIEW_DONATIONS_IN_HONOR_OF_ME_SCREEN:"view_donations_in_honor_of_me_screen",VIEW_EDIT_DONATION_BUDGET_PAGE:"view_edit_donation_budget_page",VIEW_EDIT_FUNDRAISER_STORY:"view_edit_fundraiser_story",VIEW_FRIEND_SELECTOR_DONATION_IN_HONOR_OF:"view_friend_selector_donation_in_honor_of",VIEW_FUNDRAISER:"view_fundraiser",VIEW_FUNDRAISER_CLICK:"view_fundraiser_click",VIEW_FUNDRAISER_CREATION_LANDING_PAGE:"view_fundraiser_creation_landing_page",VIEW_FUNDRAISER_CREATION_PENDING_DIALOG:"view_fundraiser_creation_pending_dialog",VIEW_FUNDRAISER_CREATION_PENDING_EDIT_DIALOG:"view_fundraiser_creation_pending_edit_dialog",VIEW_FUNDRAISER_CREATION_REDIRECT:"view_fundraiser_creation_redirect",VIEW_FUNDRAISER_CREATION_TIP:"view_fundraiser_creation_tip",VIEW_FUNDRAISER_HUB_BIRTHDAY_TAB:"view_fundraiser_hub_birthday_tab",VIEW_FUNDRAISER_HUB_CATEGORY:"view_fundraiser_hub_category",VIEW_FUNDRAISER_HUB_COMPONENT:"view_fundraiser_hub_component",VIEW_FUNDRAISER_HUB_PERSONAL_TAB:"view_fundraiser_hub_personal_tab",VIEW_FUNDRAISER_ON_PERSONALIZED_HSCROLL:"view_fundraiser_on_personalized_hscroll",VIEW_FUNDRAISER_ORGANIZER_ACCEPT_REQUEST_OUTRO:"view_fundraiser_organizer_accept_request_outro",VIEW_FUNDRAISER_PAGE_COMPONENT:"view_fundraiser_page_component",VIEW_FUNDRAISER_PAYMENT_SETTINGS_CLICK:"view_fundraiser_payment_settings_click",VIEW_FUNDRAISER_RHC:"view_fundraiser_rhc",VIEW_FUNDRAISER_SUPPORTERS:"view_fundraiser_supporters",VIEW_FUNDRAISER_UPDATES:"view_fundraiser_updates",VIEW_GIVING_FUNDS_DONATE_SCREEN:"view_giving_funds_donate_screen",VIEW_GIVING_FUNDS_LIST:"view_giving_funds_list",VIEW_GROUP_FUNDRAISER_TAB:"view_group_fundraiser_tab",VIEW_GROUP_FUNDRAISER_TAB_CONTROLLER:"view_group_fundraiser_tab_controller",VIEW_INFO_DIALOG:"view_info_dialog",VIEW_MANAGE_TAB:"view_manage_tab",VIEW_MODEL_SELECTED_PAYMENT_SELECTOR:"view_model_selected_payment_selector",VIEW_NONPROFIT_BOTTOM_SHEET:"view_nonprofit_bottom_sheet",VIEW_NONPROFIT_CLICK:"view_nonprofit_click",VIEW_NONPROFIT_FUNDRAISER_CREATION_SHORT_URL_BANNER:"view_nonprofit_fundraiser_creation_short_url_banner",VIEW_NONPROFIT_SELECTOR_PERMANENT_FUNDRAISER_DONATION:"view_nonprofit_selector_permanent_fundraiser_donation",VIEW_PAGE_FUNDRAISERS_TAB:"view_page_fundraisers_tab",VIEW_PAYMENTS_SETTINGS_RECEIPT_BANNER:"view_payments_settings_receipt_banner",VIEW_PAYOUT_DETAILS:"view_payout_details",VIEW_PAYOUT_OVERVIEW:"view_payout_overview",VIEW_PAYOUT_OVERVIEW_CLICK:"view_payout_overview_click",VIEW_PERSONAL_BENEFICIARY_CLICK:"view_personal_beneficiary_click",VIEW_USER_ON_INVITE_FLOW:"view_user_on_invite_flow",WHITELIST_DAF_CHARITY:"whitelist_daf_charity",WHITELIST_DAF_CHARITY_FAILED:"whitelist_daf_charity_failed",WHITELIST_FUNDRAISERS_API:"whitelist_fundraisers_api",XMA_BAD_DONATE_LINK:"fundraiser_xma_bad_donate_link",XMA_FALLBACK_VIEW:"fundraiser_xma_fallback_view",XMA_TAP_ATTACHMENT:"fundraiser_xma_tap_attachment",XMA_TAP_DONATE:"fundraiser_xma_tap_donate",XMA_VIEW:"fundraiser_xma_view",XMA_VIEW_DONATE_BUTTON:"fundraiser_xma_view_donate_button"})}),null);
__d("SocialGoodCharityActionsLoggerUtils",["Event","SocialGoodCharityActionsLoggerEvents","SocialGoodCharityActionsTypedLogger"],(function(a,b,c,d,e,f){var g={logAction:function(a,c,d,e){new(b("SocialGoodCharityActionsTypedLogger"))().setEvent(a).setParentEventType(c).setCampaignID(d.campaign_id).setCampaignType(d.campaign_type).setAttributes(d.attributes).setSourceAttributes(d.source_attributes).setFundraiserID(d.fundraiser_id).log()},logOnboarding:function(a,c){new(b("SocialGoodCharityActionsTypedLogger"))().setEvent(a).setParentEventType("onboarding").setAttributes(c).log()},logDonate:function(a,c){c===void 0&&(c=null),new(b("SocialGoodCharityActionsTypedLogger"))().setEvent(a).setParentEventType("donate").setAttributes(c).log()},logU2CFundraiserInvite:function(a,c,d){d===void 0&&(d=null),new(b("SocialGoodCharityActionsTypedLogger"))().setEvent(a).setParentEventType("invite").setSourceAttributes(c).setAttributes(d).log()},logU2CFundraiserCreation:function(a,c,d,e){d===void 0&&(d=null),e===void 0&&(e=null),new(b("SocialGoodCharityActionsTypedLogger"))().setEvent(a).setParentEventType("create").setSourceAttributes(c).setAttributes(d).setCampaignType(6).setAbTestNamesToGroups(e).log()},logU2CFundraiserEdit:function(a,c,d,e){d===void 0&&(d=null),e===void 0&&(e=null),new(b("SocialGoodCharityActionsTypedLogger"))().setEvent(a).setParentEventType("edit").setSourceAttributes(c).setAttributes(d).setCampaignID(c.source_id).setCampaignType(6).setAbTestNamesToGroups(e).log()},logJoinActionClick:function(a,c){a=a?b("SocialGoodCharityActionsLoggerEvents").JOIN_CLICK:b("SocialGoodCharityActionsLoggerEvents").LEAVE_CLICK;this.logAction(a,"interact",c)},logFollowActionClick:function(a,b){a=a?"follow_click":"unfollow_click";this.logAction(a,"interact",b)},logShareActionClick:function(a){this.logAction("share_click","interact",a)},logCopyLinkActionClick:function(a){this.logAction("copy_link_click","interact",a)},logXMAView:function(a){new(b("SocialGoodCharityActionsTypedLogger"))().setEvent("fundraiser_xma_view").setParentEventType("interact").setFundraiserID(a).setCampaignID(a).setCampaignType(6).log()},logXMATapDonate:function(a){new(b("SocialGoodCharityActionsTypedLogger"))().setEvent("fundraiser_xma_tap_donate").setParentEventType("interact").setFundraiserID(a).setCampaignID(a).setCampaignType(6).log()},logComposerPreviewAttachmentClose:function(){new(b("SocialGoodCharityActionsTypedLogger"))().setEvent(b("SocialGoodCharityActionsLoggerEvents").LIGHTWEIGHT_MINUTIAE_PREVIEW_ATTACHMENT_CLOSE).setParentEventType("trigger").setCampaignType(8).log()},logFundraiserForStoryCreation:function(a,c){new(b("SocialGoodCharityActionsTypedLogger"))().setCampaignType(8).setParentEventType("create").setEvent(a).setSourceAttributes(c).log()},logPostCreationFlowChangeCharity:function(a){new(b("SocialGoodCharityActionsTypedLogger"))().setEvent("change_charity").setParentEventType("create").setCampaignType(8).setAttributes(a).log()},logDonateSocialPluginLoggedInClick:function(a){this.logAction("donate_social_plugin_logged_in_click","donate",a)},logDonateSocialPluginLoggedOutClick:function(a){this.logAction("donate_social_plugin_logged_out_click","donate",a)},logCopyNonprofitCreationShortURLClick:function(a){this.logAction("copy_nonprofit_fundraiser_creation_short_url","interact",a)},logCopyNonprofitCreationShortURLOnClick:function(a,c){b("Event").listen(a,"click",function(a){g.logCopyNonprofitCreationShortURLClick(c)})}};e.exports=g}),null);
__d("filterMap",[],(function(a,b,c,d,e,f){"use strict";function a(a,b){var c=new Map();for(var a=a,d=Array.isArray(a),e=0,a=d?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var f;if(d){if(e>=a.length)break;f=a[e++]}else{e=a.next();if(e.done)break;f=e.value}f=f;var g=f[0];f=f[1];b(f,g)&&c.set(g,f)}return c}e.exports=a}),null);
__d("someMap",[],(function(a,b,c,d,e,f){"use strict";function a(a,b){for(var a=a,c=Array.isArray(a),d=0,a=c?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var e;if(c){if(d>=a.length)break;e=a[d++]}else{d=a.next();if(d.done)break;e=d.value}e=e;if(b(e[1],e[0]))return!0}return!1}e.exports=a}),null);