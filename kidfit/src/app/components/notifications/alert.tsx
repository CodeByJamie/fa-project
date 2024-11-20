"use client";
import * as React from "react";
import { motion, useAnimation } from "framer-motion";
import * as Icons from "@heroicons/react/24/outline";

export default function Alert({
    message,
    type,
    duration = 5,
}: {
    message: string;
    type: "success" | "error";
    duration?: number;
}) {
    const alertId = Math.random().toString(36).substring(7);

    const alertAnimations = {
        start: {
            opacity: 0,
            scale: 0.3,
            x: 500,
        },
        end: {
            scale: 1,
            x: 0,
            opacity: 1,
        },
    };
    const alertAnimationControls = useAnimation();

    // Automatically close the alert after a certain duration
    React.useEffect(() => {
        alertAnimationControls.start(alertAnimations.end).then(() => {
            const timer = setTimeout(() => {
                const alerts = document.querySelectorAll(
                    "[data-component-type=alert]"
                );
                if (alerts) {
                    const alert = Array.from(alerts).find((alert) => {
                        const alertIdentifier = alert.getAttribute(
                            "data-alert-identifier"
                        );
                        return alertIdentifier === `${type}-${alertId}`;
                    });

                    if (!alert) {
                        Array.from(alerts).forEach((alert) => {
                            const alertCreatedAt = alert.getAttribute(
                                "data-alert-created-at"
                            );
                            if (
                                alertCreatedAt &&
                                parseInt(alertCreatedAt) <=
                                    Date.now() - duration * 1000
                            ) {
                                alertAnimationControls.start(
                                    alertAnimations.start
                                );
                                setTimeout(() => {
                                    alert.remove();
                                }, 1500);
                                return;
                            }
                        });
                    } else {
                        alertAnimationControls.start(alertAnimations.start);
                        setTimeout(() => {
                            alert.remove();
                        }, 1500);
                    }
                } else {
                    console.error("No alerts not found");
                }
            }, (duration + 1) * 1000);

            return () => clearTimeout(timer);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.3, x: 500 }}
            animate={alertAnimationControls}
            variants={alertAnimations}
            transition={{
                duration: 1,
                ease: "easeInOut",
                type: "spring",
            }}
            data-component-type="alert"
            data-alert-created-at={Date.now()}
            data-alert-identifier={`${type}-${alertId}`}
            className="min-w-[300px] p-3 rounded-lg relative overflow-hidden border border-zinc-900 bg-zinc-800 shadow-lg"
        >
            <div className="flexRow items-center gap-3">
                {type === "success" ? (
                    <Icons.CheckCircleIcon className="size-6 text-green-500" />
                ) : (
                    <Icons.XCircleIcon className="size-6 text-brandCol" />
                )}

                <span className="text-lg text-zinc-400">{message}</span>
            </div>

            <motion.span
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{
                    duration: duration + 1,
                }}
                className={`absolute bottom-0 left-0 h-1 bg-brandCol`}
            />
        </motion.div>
    );
}
