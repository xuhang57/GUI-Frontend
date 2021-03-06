import ExternalLinkConstants from "constants/ExternalLinkConstants";
import ExternalLink from "models/ExternalLink";
import actions from "actions";
import Utils from "../Utils";

export default {

    createAndAddToProject: function(payload) {

        if (!payload.title)
            throw new Error("Missing title");
        if (!payload.description)
            throw new Error("Missing description");
        if (!payload.external_link)
            throw new Error("Missing external_link");
        if (!payload.project)
            throw new Error("Missing project");

        var title = payload.title,
            project = payload.project,
            link = payload.external_link,
            description = payload.description;

        var external_link = new ExternalLink({
            title: title,
            link: link,
            description: description
        });

        // Add the external_link optimistically
        Utils.dispatch(
            ExternalLinkConstants.ADD_LINK,
            {
                external_link: external_link
            },
            {
                silent: false
            });

        external_link.save().done(function() {
            Utils.dispatch(
                ExternalLinkConstants.UPDATE_LINK,
                {
                    external_link: external_link
                },
                {
                    silent: false
                });
            Utils.dispatch(
                ExternalLinkConstants.REMOVE_PENDING_LINK_FROM_PROJECT, {
                    external_link: external_link,
                    project: project
                });
            actions.ProjectExternalLinkActions.addExternalLinkToProject({
                project: project,
                external_link: external_link
            });
        }).fail(function(response) {
            Utils.dispatch(
                ExternalLinkConstants.REMOVE_LINK,
                {
                    external_link: external_link
                },
                {
                    silent: false
                });
            Utils.dispatch(
                ExternalLinkConstants.REMOVE_PENDING_LINK_FROM_PROJECT, {
                    external_link: external_link,
                    project: project
                });
            Utils.displayError({
                title: "ExternalLink could not be created",
                response: response
            });
        });

        Utils.dispatch(
            ExternalLinkConstants.ADD_PENDING_LINK_TO_PROJECT, {
                external_link: external_link,
                project: project
            });
    }
};
