# helm-chart-example
helm-chart-example


# install
kubectl create namespace argocd
kubectl apply -n argocd -f argocd/argocd.yaml 

kubectl create namespace argo-rollouts
kubectl apply -n argo-rollouts -f argocd/rollouts.yaml

kubectl -n argocd get secrets argocd-initial-admin-secret -o jsonpath='{.data.password}' | base64 -d 


# extensiion test
kubectl apply -n argocd -f argocd/rollout-extension.yaml
kubectl -n argocd get ArgoCDExtension

# proxy
kubectl -n argocd port-forward svc/argocd-server  --address 0.0.0.0 8443:443





https://10.0.0.4:8443/extensions/resources/dummy.com/Migration/ui/extensions.js

