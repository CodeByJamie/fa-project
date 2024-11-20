"use client";
import Alert from "@/app/components/notifications/alert";
import * as React from "react";
import { createRoot } from "react-dom/client";

export async function triggerAlert({
    message,
    type,
    duration,
}: {
    message: string;
    type: "success" | "error";
    duration?: number;
}) {
    console.log(type)
    try {
        // Find or create the main container for all alerts
        let alertContainer = document.querySelector(
            "[data-component-type=notifications-container]"
        );
        if (!alertContainer) {
            alertContainer = document.createElement("div");
            alertContainer.setAttribute(
                "data-component-type",
                "notifications-container"
            );
            alertContainer.className =
                "fixed top-0 right-0 z-50 p-2 flex flex-col gap-4 items-start";
            document.body.appendChild(alertContainer);
        }

        // Create a new container for the individual alert
        const individualAlertContainer = document.createElement("div");
        alertContainer.appendChild(individualAlertContainer);

        // Render the alert inside the new container
        const root = createRoot(individualAlertContainer);
        root.render(
            React.createElement(Alert, {
                message,
                type,
                duration,
            })
        );
    } catch (error) {
        console.error("Failed to trigger alert:", error);
    }
}